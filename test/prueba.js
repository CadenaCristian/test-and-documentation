const axios = require('axios');

const url = "https://tf6bitrtck.execute-api.us-east-1.amazonaws.com/dev";
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'eyJraWQiOiJ5YUVENkdJMkRGRXZVeFhGdHBcLzlrTlo2UjMxR2VyWnlVaEtxN1hzT3FRND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiYTdlZDQ1Ni00YTQ2LTQzMTQtYjQxNy1iNTlkOTBiNzM4ODQiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9qeUQ3VXZmSnEiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOnRydWUsImNvZ25pdG86dXNlcm5hbWUiOiJiYTdlZDQ1Ni00YTQ2LTQzMTQtYjQxNy1iNTlkOTBiNzM4ODQiLCJvcmlnaW5fanRpIjoiMjk3ODIwMWMtMDIxZS00N2Q0LWJiNWYtOWZhYTQyODUyNjQ5IiwiYXVkIjoiNHFjb2I5NnVpb2k5aW90bG9hbDk0c2Q0cnUiLCJldmVudF9pZCI6IjkyZjZhODZiLTM4ZTQtNDE3NC04N2M3LTlmZDAwMzExOTljOSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjU0MTgwMDM3LCJuYW1lIjoiKzU3MzExNjg4Mjc2MyIsInBob25lX251bWJlciI6Iis1NzMxMTY4ODI3NjMiLCJleHAiOjE2NTQyNjY0MzcsImlhdCI6MTY1NDE4MDAzNywianRpIjoiZjgxZDZhOWUtMjQzZC00YjhjLWFjMjEtN2QwYTA5M2I0ZmZlIn0.JrBXFGfuWYD0Rj1FRUOhq-1sU9owUUUJ5gqtcmQgMcTeessH4hhOt72LrRKGTzZSpFKmKraB0XGxaVnsYKjMqY_ZsZno5optM8aguXNDbKGvYMSf2SaT-gaXKRgDDMfJ5wNGpS3zdmJDuqmIAMTcb2_KSDmZmutwMZGGwhuduek0huxqj0mJieevDQACk76GKR0dsZFwnx9zuv3QNexq7afeuVKT1u9xUtRd8VyoCsACi5Jh6gFhZoCwK1L30Q0YxbFj1OjHIQDHwiNMzYnkkByqcAo455d4xzMqAtqCWuEXZ6jiJvZeBFoWOAmNT3DS91W5HPEfWRRYHucP6O9MQw'
}

const upload = async (body) => {
    const { idDoctor, nameFile, type, image } = body;
    let response = {};
    try {
        response = await axios({
            url: `${url}/files`,
            method: "POST",
            data: {
                "idDoctor": idDoctor,
                "nameFile": nameFile,
                "type": type,
                "image": image
            },
            headers: headers,
        });
    } catch (error) {
        console.log("ERROR: ", error);
    }
    return response;
}

module.exports = upload;