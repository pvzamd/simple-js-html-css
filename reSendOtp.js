// handle resend OTP start
const timeLeft = reactive({ forEmail: null, forPhone: null })
const TIMER_DURATION = 10
timeLeft.forEmail = TIMER_DURATION
timeLeft.forPhone = TIMER_DURATION

const timerIntervals = reactive({ forEmail: null, forPhone: null })
const runTimer = (fieldSpecifier) => {
    if (timerIntervals[fieldSpecifier]) clearInterval(timerIntervals[fieldSpecifier])
    timerIntervals[fieldSpecifier] = setInterval(() => {
        if (timeLeft[fieldSpecifier] > 0) timeLeft[fieldSpecifier]--
        else {
            successOTPSent[fieldSpecifier] = ""
            clearInterval(timerIntervals[fieldSpecifier])
            timerIntervals[fieldSpecifier] = null
        }
    }, 1000)
}

const initializeTimer = (fieldSpecifier) => {
    const storedTimestamp = localStorage.getItem(`otpSentTime${fieldSpecifier}`)
    const currentTime = Date.now()
    if (!storedTimestamp) {
        localStorage.setItem(`otpSentTime${fieldSpecifier}`, currentTime)
        timeLeft[fieldSpecifier] = TIMER_DURATION
        runTimer(fieldSpecifier)
        return
    }
    const elapsedSeconds = Math.floor((currentTime - parseInt(storedTimestamp)) / 1000)
    if (elapsedSeconds < TIMER_DURATION) {
        timeLeft[fieldSpecifier] = TIMER_DURATION - elapsedSeconds
        runTimer(fieldSpecifier)
    }
    if (elapsedSeconds >= TIMER_DURATION) timeLeft[fieldSpecifier] = 0
}

onMounted(() => {
    initializeTimer('forEmail')
    initializeTimer('forPhone')
})

const reSendOTP = async (fieldSpecifier) => {
    if (timeLeft[fieldSpecifier] > 0) return
    localStorage.setItem(`otpSentTime${fieldSpecifier}`, Date.now())
    await sendSpecificOTP(fieldSpecifier)
    timeLeft[fieldSpecifier] = TIMER_DURATION
    runTimer(fieldSpecifier)
}

const successOTPSent = reactive({ forEmail: "", forPhone: "" })

const sendSpecificOTP = async (fieldSpecifier) => {
    // try {
    //     let response
    //     if (fieldSpecifier === "forEmail") response = await OTPService.sendEmailOtp({ email: userDetails.value.email })
    //     if (fieldSpecifier === "forPhone") response = await OTPService.sendMobileOtp({ mobile: userDetails.value.contact })
    //     if (response?.data?.isSuccess) {
    //         errors[fieldSpecifier === "forEmail"?"emailOTP":"mobileOTP"] = ""
    //         errors.message = ""
    //         successOTPSent[fieldSpecifier] = "OTP sent successfully."
    //     }
    //     else {
    //         successOTPSent[fieldSpecifier] = ""
    //         errors[fieldSpecifier === "forEmail"?"emailOTP":"mobileOTP"] = "Something went wrong. Please try again."
    //     }
    // } catch (error) {
    //     successOTPSent[fieldSpecifier] = ""
    //     console.error("Error sending email OTP:", error);
    //     errors.message = "Failed to send email OTP, please try again later.";
    // }
}
// handle resend OTP end