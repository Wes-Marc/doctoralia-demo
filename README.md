# Doctoralia Challenge Demo


### A HubSpot CMS React code challenge for the Doctoralia team skill assessment


The challenge require the development of a HubSpot CMS React component to compare Subscription features. The main objective was to produce a visual and functional component offering smooth UX editing experience for marketers setting the module up in HubSpot.


![FeaturesTable Component Image](https://github.com/Wes-Marc/doctoralia-demo/blob/master/src/theme/my-theme/assets/Images/featuresTable_component.jpg)


## Approach Explanation


Since the Subscription features are presented in a tabular structure, I decided to use HTML table for better semantics and accessibility. Performance and Accessibility are two topics I care deeply, and I always try to be mindful about it when programming.


HubSpot CMS React provided a great way to break the Subscription features component into smaller components, allowing me to divide the table in reusable and configurable pieces that made organization easy.


I've used the HubSpot CMS React **"Getting started" boilerplate** theme to streamline the development. Important to note that I used the React theme version instead of React modules approach, as I believe it gives a more accurate representation of the environment where I'd do my work in a Doctoralia project. I also configured **Vite** with **PostCSS Import** to bundle my css files into one main file and to facilitate the use of some Hubl settings. I created one static template to demo the challenge, and configured the **Roboto font** at the theme level to not attach it to the component itself, also to make it easier to change giving that the font wasn't clear in the mockup (Roboto was my best guess). Besides this setup, I made use of many HubSpot CMS React development related tools like Hubl, Island, CSS Modules, the CLI and a developer test account.


One final thing I should mention is that I made the component entirely configurable through module fields instead of a HubDB table. It wasn't an easy choice as HubDB tables would make complete sense in this scenario, but it was a combination of personal experience with marketers/content editors that aren't HubSpot savy and didn't like jumping around the tool to edit modules, and the determination to demonstrate my ability in making a good module editing UX.


## Obstacles Faced


As I mentioned previously I used module fields to build the full editing experience for the Subscription Features component, and that was quite challenging. I'm more used to configuring module fields directly in the JSON file. When I started in HubSpot there was no other way to do that, so now with React and jsx I did have a hard time referencing the fields correctly. It took a lot of trial and error, specially with the **Rich Text** and **Icon** component fields.

To help with this I used the HubSpot **Elevate React Theme** as a refence. It showed me the best way to configure and organize the fields, and what exactly is expected as props in those field components.


## Additional Documentation


Building and using this project is straightforward, the configuration files are already in the repository and should work straight away. You just need to install the following dev dependencies:


* vite (latest)
* postcss (latest)
* postcss-import (latest)
* @spingroup/postcss-hubl (latest)


[!WARNING]
The local module preview does **not** load template css. To view the styled component open the **Demo** template in the local dev server or import the main css file in the component ("styles/main.hubl.css") but don't forget to remove it before deploying to HubSpot.


[!IMPORTANT]
I've used HubSpot's **2025.2** platform.


Thank you for viewing this, and I look forward to collaborate in awesome HubSpot projects with you!

