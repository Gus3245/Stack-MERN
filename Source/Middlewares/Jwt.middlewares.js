const JwtValidation = async (req, res) => {
    
    const { authorization } = req.headers;
    console.log(authorization);

    if (!authorization) {
        return res.send(401).send({ message: "Not Authored" });
    }

    const parts = authorization.split(" ");
    const [schema, token] = parts;

    if (parts.length !== 2) {
        return res.send(401).send({ message: "Not Authored" });
    }

    if (schema !== "Bearer") {
        return res.send(401).send({ message: "Not Authored" });
    }
};

export default {JwtValidation};
