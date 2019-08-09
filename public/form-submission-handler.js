(function() {
  const validateHuman = honeypot => {
    if (honeypot) {
      //if hidden form filled up
      console.log("Robot Detected!");
      return true;
    } else {
      console.log("Welcome Human!");
    }
  };

  const validateData = formData => {
    // 1. Test email
    const emailTest = /[\w-.]+@[\w-]+.[a-z]{2,}/.test(formData.email);
    // 2. Test message
    const messageTest = formData.message !== "";
    return emailTest && messageTest;
  };

  // get all data in form and return object
  const getFormData = form => {
    const elements = form.elements;
    let honeypot;

    const fields = Object.keys(elements)
      .filter(k => {
        if (elements[k].name === "honeypot") {
          honeypot = elements[k].value;
          return false;
        }
        return true;
      })
      .map(k => {
        if (elements[k].name !== undefined) {
          return elements[k].name;
          // special case for Edge's html collection
        } else if (elements[k].length > 0) {
          return elements[k].item(0).name;
        }
      })
      .filter((item, pos, self) => self.indexOf(item) == pos && item);

    const formData = {};
    fields.forEach(name => {
      const element = elements[name];

      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        const data = [];
        for (let i = 0; i < element.length; i++) {
          const item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(", ");
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSend = form.dataset.email || ""; // no email by default

    console.log(formData);
    return { data: formData, honeypot };
  };

  const handleFormSubmit = event => {
    // handles form submit without any jquery
    event.preventDefault(); // we are submitting via xhr below
    const form = event.target;
    const formData = getFormData(form);
    const dataValidator = validateData(formData);
    let data;
    if (dataValidator) {
      data = formData.data;
    } else {
      return false;
    }

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    disableAllButtons(form);
    const url = form.action;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      console.log(xhr.status, xhr.statusText);
      console.log(xhr.responseText);
      form.reset();
      const formElements = form.querySelector(".form-elements");
      if (formElements) {
        formElements.style.display = "none"; // hide form
      }
      const thankYouMessage = form.querySelector(".thankyou_message");
      if (thankYouMessage) {
        thankYouMessage.style.display = "block";
      }
      return;
    };
    // url encode form data for sending as post data
    const encoded = Object.keys(data)
      .map(k => {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      })
      .join("&");
    xhr.send(encoded);
  };

  const loaded = () => {
    console.log("Contact form submission handler loaded successfully.");
    // bind to the submit event of our form
    const forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  const disableAllButtons = form => {
    const buttons = form.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  };
})();
