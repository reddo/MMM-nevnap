Module.register("MMM-Nevnap", {
  defaults: {
    mode: "today", // today, tomorrow, yesterday, day, name
    day: "", // 1-31
    month: "", // 1-12
    name: "",
    wrapperSize: "0.75em",
    updateInterval: 5 * 60 * 1000, // every 5 minutes
    initialLoadDelay: 3000,
    retryDelay: 15000,
    lang: config.language
  },

  getScripts: () => ["moment.js"],

  getTranslations: function () {
    return {
      en: "translations/en.json",
      cs: "translations/cs.json",
      de: "translations/de.json",
      es: "translations/es.json",
      fr: "translations/fr.json",
      hr: "translations/hr.json",
      hu: "translations/hu.json",
      it: "translations/it.json",
      pl: "translations/pl.json",
      sv: "translations/sv.json"
    };
  },

  getStyles: function () {
    return ["MMM-Nevnap.css"];
  },

  start: function () {
    Log.info("Starting module: " + this.name);
    this.names = [];
    this.loaded = false;
    this.scheduleUpdate(this.config.initialLoadDelay);
    this.updateTimer = null;
  },

  getURL: function () {
    const baseUrl = "https://api.nevnapok.eu/";
    let url;
    const date = moment();
    switch (this.config.mode) {
      case "today":
        url = `${baseUrl}ma`;
        break;
      case "tomorrow":
        url = `${baseUrl}nap/${date.add(1, "days").format("MM-DD")}`;
        break;
      case "yesterday":
        url = `${baseUrl}nap/${date.subtract(1, "days").format("MM-DD")}`;
        break;
      case "day":
        if (this.config.day !== "" && this.config.month !== "") {
          url = `${baseUrl}nap/${this.config.month}-${this.config.day}`;
          break;
        } else {
          Log.error(self.name + ": Month or day not inserted!!");
          break;
        }
      case "name":
        if (this.config.name !== "") {
          url = `${baseUrl}nev/${this.config.name}`;
          break;
        } else {
          Log.error(self.name + ": Name not inserted!!");
          break;
        }
      default:
        break;
    }
    return url;
  },

  getData: function () {
    const self = this;
    const retry = false;
    const dataRequest = new XMLHttpRequest();
    const url = this.getURL();
    const date = moment();
    let formattedDate;

    switch (this.config.mode) {
      case "today":
        formattedDate = `${date.format("MM-DD")}`;
        break;
      case "tomorrow":
        formattedDate = `${date.add(1, "days").format("MM-DD")}`;
        break;
      case "yesterday":
        formattedDate = `${date.subtract(1, "days").format("MM-DD")}`;
        break;
      case "day":
        if (this.config.day !== "" && this.config.month !== "") {
          formattedDate = `${this.config.month}-${this.config.day}`;
          break;
        } else {
          Log.error(self.name + ": Month or day not inserted!!");
          break;
        }
      case "name":
        if (this.config.name !== "") {
          formattedDate = `${this.config.name}`;
          break;
        } else {
          Log.error(self.name + ": Name not inserted!!");
          break;
        }
      default:
        break;
    }

    Log.info("Fetched URL: " + url);
    dataRequest.open("GET", url, true);
    dataRequest.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
          const data = JSON.parse(this.response);
          self.names = data[formattedDate].join(", ");
          self.loaded = true;
          self.updateDom();
        } else {
          Log.error(self.name + ": Could not load namedays.");
        }
        if (retry) {
          self.scheduleUpdate(self.loaded ? -1 : self.config.retryDelay);
        }
      }
    };
    dataRequest.send();
  },

  getDom: function () {
    let message;
    const modes = ["today", "tomorrow", "yesterday", "day", "name"];

    const wrapper = document.createElement("div");
    wrapper.className = "nameDayWrapper";
    wrapper.style.fontSize = this.config.wrapperSize;

    if (!modes.includes(this.config.mode)) {
      wrapper.innerHTML = this.translate("SET_CORRECT_MODE") + this.name + ".";
      wrapper.className = "dimmed light small";
      return wrapper;
    }

    if (!this.loaded) {
      wrapper.innerHTML = this.translate("LOADING");
      wrapper.className = "dimmed light small";
      return wrapper;
    }

    // today, tomorrow, yesterday, day, name
    if (this.config.mode === "today") {
      message = this.translate("NAMEDAY_TODAY").replace("$NAME$", this.names);
    } else if (this.config.mode === "tomorrow") {
      message = this.translate("NAMEDAY_TOMORROW").replace(
        "$NAME$",
        this.names
      );
    } else if (this.config.mode === "yesterday") {
      message = this.translate("NAMEDAY_YESTERDAY").replace(
        "$NAME$",
        this.names
      );
    } else if (this.config.mode === "name") {
      message = this.translate("NAMEDAY_NAMEDAYS")
        .replace("$DAY$", this.config.day)
        .replace("$MONTH$", this.config.month)
        .replace("$NAME$", this.names);
    }

    wrapper.innerHTML = message;
    return wrapper;
  },

  scheduleUpdate: function (delay) {
    let nextLoad = this.config.updateInterval;
    if (typeof delay !== "undefined" && delay >= 0) {
      nextLoad = delay;
    }
    const self = this;
    clearTimeout(this.updateTimer);
    this.updateTimer = setTimeout(function () {
      self.getData();
    }, nextLoad);
  }
});
