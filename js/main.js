let start = document.getElementById("start"),
    total = document.getElementById("total"),
    dailyUsage = document.getElementById("daily-usage"),
    generateVal = document.getElementById("generate"),
    setVal = document.getElementById("set"),
    result = document.getElementById("result"),
    startStorage = localStorage.getItem("Start_value"),
    totalStorage = localStorage.getItem("total_value"),
    dailyStorage = localStorage.getItem("daily_value");
(generateVal.onclick = () => {
    total.value && dailyUsage.value && "" !== start.value
        ? (localStorage.setItem("Start_value", start.value), localStorage.setItem("total_value", total.value), localStorage.setItem("daily_value", dailyUsage.value), (generateVal.style.display = "block"), window.location.reload())
        : ("arabic-style" == document.body.getAttribute("class") ? (result.textContent = "يجب ملئ الحقول أولا") : (result.textContent = "Sorry Input Cant Be Empty"),
          Array.from(document.getElementsByTagName("input")).forEach((t) => {
              t.onfocus = () => {
                  result.textContent = "";
              };
          }));
}),
    startStorage && totalStorage && "" !== dailyStorage
        ? ((start.parentElement.style.display = "none"),
          (generateVal.style.display = "none"),
          (setVal.style.display = "block"),
          (result.style.marginTop = "125px"),
          (result.style.textAlign = "center"),
          "arabic-style" == document.body.getAttribute("class") ? (result.textContent = " تاريخ بداية الباقة : " + startStorage) : (result.textContent = "Start Quota On: " + startStorage))
        : ((start.parentElement.style.display = "block"), (setVal.style.display = "none")),
    (set.onclick = () => {
        localStorage.removeItem("Start_value"), localStorage.removeItem("total_value"), localStorage.removeItem("daily_value"), window.location.reload();
    });
let showDaily = document.querySelector(".show-usage span"),
    showTotal = document.querySelector(".show-total span"),
    progress = document.querySelector(".progress span"),
    progressMsg = document.querySelector(".progress .progress-msg"),
    showDay = document.querySelector(".day span"),
    theUsed = document.querySelector(".used span"),
    remind = document.querySelector(".remind span"),
    endDate = new Date(),
    endMillsec = endDate.getTime(),
    startMillsec = new Date(startStorage).getTime(),
    calcFuntion = 864e5,
    lastStart = startMillsec / calcFuntion,
    lastEnd = endMillsec / calcFuntion,
    theRealdays = Math.floor(lastEnd) - lastStart;
null == totalStorage && null == dailyStorage
    ? ((showDaily.textContent = 0), (showTotal.textContent = 0), (showDay.textContent = 0))
    : ((showDaily.textContent = dailyStorage), (showTotal.textContent = totalStorage), (showDay.textContent = theRealdays)),
    (theUsed.textContent = dailyStorage * theRealdays),
    (remind.textContent = totalStorage - dailyStorage * theRealdays),
    (progress.style.width = 100 - 3 * theRealdays + "%"),
    progress.style.width > "1%" && ((progressMsg.style.display = "block"), (progressMsg.textContent = progress.style.width), (progressMsg.style.left = progress.style.width), (progressMsg.style.transform = "translateX(-50%)")),
    (progress.style.backgroundColor = "#008800a8"),
    progress.style.width <= "30%" ? (progress.style.backgroundColor = "#f00") : progress.style.width <= "50%" && (progress.style.backgroundColor = "#ff4967");
