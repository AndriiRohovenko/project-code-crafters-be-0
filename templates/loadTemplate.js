import fs from "node:fs/promises";
import path from "node:path";

const templatesDir = path.resolve("templates/emails");

export const loadTemplate = async (templateName, variables = {}) => {
  try {
    const templatePath = path.join(templatesDir, templateName);
    let html = await fs.readFile(templatePath, "utf-8");

    if (variables.verifyLink) {
      html = html.replaceAll("{verifyLink}", variables.verifyLink);
    }
    return html;
  } catch (error) {
    console.error(`Template not found: ${templateName}`, error);
    throw new Error("Error loading email template");
  }
};

export default loadTemplate;
