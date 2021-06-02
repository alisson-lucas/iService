import Joi from "joi";

export abstract class CommonValidatorConfig {
    private schema: Joi.ObjectSchema;

    constructor(schema: Joi.ObjectSchema) {
        this.schema = schema;
    }

    public validate(request: any):  Joi.ValidationError | undefined {
        return this.schema.validate(request).error;
    };

}