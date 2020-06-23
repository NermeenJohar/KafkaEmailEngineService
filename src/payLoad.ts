// Payload to be send to Kafka 
export class PayLoad {
    TemplateCode: string;
    ApplicationCode: string;
    RequestedEmailDateTime: Date;
    RequestedSendDateTime: Date;
    EmailParameters: object;

    Recipients: string;
    EmailSubject: string;
    CcRecipients: string;
    BccRecipients: string;
    SenderEmail: string;
}

export class Email {
    MarketName: string;
    Mold: string;
    ApplicationName: string;
}