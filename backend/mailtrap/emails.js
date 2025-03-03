import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipients = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: " Email verification",
    });
    console.log("Verification email sent successfully:", response);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error("Failed to send verification email", error);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipients = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      template_uuid: "91450e45-dde2-48fa-a61b-27e42a7612b5",
      template_variables: {
        first_name: name,
      },
    });
    console.log("Welcome email sent successfully:", response);
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email", error);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipients = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      subject: "Password Reset Request",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password reset",
    });
    console.log("Password reset email sent successfully:", response);
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw new Error("Failed to send password reset email", error);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipients = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      subject: "Password Reset Success",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password reset",
    });
    console.log("Password reset success email sent successfully:", response);
  } catch (error) {
    console.error("Error sending password reset success email:", error);
    throw new Error("Failed to send password reset success email", error);
  }
};
