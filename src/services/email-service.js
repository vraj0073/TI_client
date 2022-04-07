// referred this content from https://javascript.plainenglish.io/send-emails-easily-with-react-64240dd0f638 for configuring emailJS connection

import { send, init } from "emailjs-com";

const serviceId = "service_mcw1vh8";
const templateId = "template_bchrorn";
const userID = "zhASuyKIZUxIDsTTc";

const sendEmail = (content) => {
  init(userID);
  const toSend = {
    from_name: "NGO",
    to_name: content.name,
    to_email: content.Emailid,
    message: "Your food request is accepted",
  };
  send(serviceId, templateId, toSend)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default { sendEmail };