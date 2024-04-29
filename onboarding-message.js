<%*
/*
 April 29 2024
 This will set the standard Onboarding message for Slack, based on user prompts in Obsidian.
*/ 
const name = await tp.system.prompt("Name")
const title = await tp.system.prompt("Title")
const systemID = await tp.system.prompt("SystemID")
const indiaIT = await tp.system.prompt("India IT Contact")

tR += `
@channel the below accounts have been created for **${name}** (${title}) ${systemID}:
- Asana
- Slack
- Tekla-Trimble
- Bamboo HR access
Notes:
1. Credentials have been added in LastPass.
2. ${systemID} has been added to the **JMT Tool Deployment Manager** and confirmed to exist in the **JMT Model Sharing Role Groups** document.
3. TeamViewer has been updated and onboarding tasks have been completed.
@${indiaIT} is taking care of creating the Windows Domain user.
`
%>