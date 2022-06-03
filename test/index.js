const upload = require("./prueba");
const { exampleUpload, uploadMessagge } = require("./data_test");

describe('My Test Suite', () => {
    it('Whit this case you will can test upload lambda', async () => {
        const { data } = await upload(exampleUpload);
        expect(data.message).toEqual(uploadMessagge.successfullyLoaded);
    });
    it('Whit this case you will validate that no field is empty', async () => {
        exampleUpload.idDoctor = "";
        const { data } = await upload(exampleUpload);
        expect(data.message).toEqual(uploadMessagge.is_empty_validator);
    });
    it('Whit this case you will validate if it has all the expected parameters', async () => {
        delete exampleUpload.idDoctor;
        const { data } = await upload(exampleUpload);
        expect(data.message).toEqual(uploadMessagge.exist_field_validator);
    });
});