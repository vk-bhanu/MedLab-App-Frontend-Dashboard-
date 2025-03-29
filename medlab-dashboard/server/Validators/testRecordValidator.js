function validateTestRecord(req, res, next) {
    const { name, age, email, phone, tests, appointmentDate, appointmentTime, paymentOption, totalPayment } = req.body;

    if (!name || !age || !email || !phone || !tests || !appointmentDate || !appointmentTime || !totalPayment) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    if (typeof name !== "string" || name.trim().length === 0) {
        return res.status(400).json({ error: "Invalid name" });
    }

    if (!Number.isInteger(age) || age < 1) {
        return res.status(400).json({ error: "Invalid age" });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
    }

    if (!/^\d{10}$/.test(phone)) {
        return res.status(400).json({ error: "Invalid phone number (must be 10 digits)" });
    }

    if (!Array.isArray(tests) || tests.length === 0) {
        return res.status(400).json({ error: "At least one test must be selected" });
    }

    if (isNaN(Date.parse(appointmentDate))) {
        return res.status(400).json({ error: "Invalid appointment date" });
    }

    if (typeof appointmentTime !== "string" || appointmentTime.trim().length === 0) {
        return res.status(400).json({ error: "Invalid appointment time" });
    }

    if (typeof totalPayment !== "number" || totalPayment < 0) {
        return res.status(400).json({ error: "Invalid total payment amount" });
    }

    if (paymentOption && !["cash", "pay-at-center"].includes(paymentOption)) {
        return res.status(400).json({ error: "Invalid payment option" });
    }

    next();
}

export default validateTestRecord;
