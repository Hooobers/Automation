<%*
/*
 April 29 2024
 This will set the standard Offboarding message for Slack, based on user prompts in Obsidian.
*/ 
const name = await tp.system.prompt("Name")
const title = await tp.system.prompt("Title")
const systemID = await tp.system.prompt("SystemID")
const indiaIT = await tp.system.prompt("India IT Contact")

tR += `
@channel I've completed the Offboarding tasks for **${name}** (${title}) ${systemID} and removed the following accounts:
- Asana
- Slack
- Tekla-Trimble
${indiaIT} please delete the user from the Windows Domain and confirm once done.  
Notes:
1. TeamViewer and LastPass have been updated.
2. ${systemID} has been removed to the **JMT Tool Deployment Manager** and has been left remaining in the **JMT Model Sharing Role Groups** document.
3. Offboarding tasks are completed in Bamboo HR.
4. Confirmed there's no Bluebeam, Email, or Office 365 license assigned.
`
%>