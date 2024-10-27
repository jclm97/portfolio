<div align="center">
  <img  src="public/images/logo.png" alt="Logo" width="150" />
</div>
<h1 align="center">
  <a href="https://samirhassen.com" target="_blank">samirhassen.com</a>
</h1>
<p>
Portfolio website which was inspired by <a href="https://brittanychiang.com" target="_blank">Brittany Chiang's</a> design. This was built using Next.js, Tailwind CSS, shadcn/ui, and desire to recreate a nicely design portfolio website.
</p>

<div align="center">
  <img alt="Website Visual" src="https://raw.githubusercontent.com/shassen14/portfolio_website/refs/heads/main/public/images/website_screenshot.png" />
</div>

## 🚨 Forking this repo (please read!)

Feel free to use this code for your own website, but please give proper credit linking back to [brittanychiang.com](https://brittanychiang.com) since a lot of this is her work.

I programmed this website myself trying to implement Brittany's design, so feel free to give me credit as well if using my code. I like sharing code with others. Just don't claim that you programmed everything yourself.

### TL;DR

* Yes, you can fork this repo. Give Brittany proper credit by linking back to [brittanychiang.com](https://brittanychiang.com).
* Feel free to give me credit as well for programming this by linking back to [samirhassen.com](https://samirhassen.com).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Edit website for your needs

#### [global.css](src/app/globals.css)

To change the color theme and keep the same style, one needs to change the colors in this file in hsl format. For specific style color changes, one may needs to go into the code to change the text, background, etc. colors.

#### [page_details.json](public/configs/page_details.json)

To change majority of the website's content, edit this file. 

**header**

5 second introduction snippet.

```
  "header": {
    "image": "images/profile.jpg", // insert profile picture path string here
    "introduction": "Howdy, Samir here", // insert intro string here
    "position": "Software Engineer", // insert position or what you want to be known as string here
    "summary": "I like to build autonomous systems" // insert short description of yourself string here
  },
```

**menu**

One can change the section order which will change the order of which section shows up on the right hand side. This will also reflect on the menu on the left hand side.

```
  "menu": [
    {"isActive": false, "section": "about"}, // about section
    {"isActive": false, "section": "education"}, // education section, I didn't include this in mine.
    {"isActive": false, "section": "experience"}, // experience section
    {"isActive": false, "section": "projects"} // projects section
  ],
```

**education**

```
  "education": [  {
    "subject": "Mechanical Engineering", // Degree subject
    "degree": "MS", // Degree level
    "university": "Texas A&M University" // School or University
  }, 
  ... {more education elements}]
```

**experience**

```
 "experience":  [ { 
    "position": "Position",
    "prevPositions": ["Previous", "Positions", "Held at the same company"],
    "company": "Company",
    "startDate": "Oct 1999",
    "endDate": "Oct 2003",
    "description": "Put your accomplishments and what you did here.",
    "skills": ["List", "technical", "or", "soft", "skills", "here", "one", "by", "one"],
    "mainLink": "link_here.com",
    "sideLinks": [{"label":"text showed to the viewer", "link":"extra_link_here.com"}]
  },  
  ... {more experience elements}]
```

**projects**

```
  "projects":  [ { 
    "name": "Project Title",
    "image":"picture from https://raw.githubusercontent.com or relative path within this project",
    "description": "Describe project here",
    "skills": ["List", "technical", "or", "soft", "skills", "here", "one", "by", "one"],
     "mainLink": "link_here.com",
    "sideLinks": [{"label":"text showed to the viewer", "link":"extra_link_here.com"}]
  },
  ... {more project elements}]
```

#### [Contacts.tsx](src/components/Contacts.tsx)

Edit this file for desired social media or contact information. I would like to add this into the json.

* Possible TODO: create an enum with several different social media website string (i.e. twitter, linkedin, etc.). Create a type that includes the string for type of social media and the link. Contacts.tsx will accept an array of this new type which would create a button for each social media in switch statement. If one wants to add more, then add onto the enum and switch statement. Also add the logo from react-icons.

#### [About.tsx](src/components/About.tsx)

Edit this file to edit a more detailed summary of yourself. This one will not be included in the json since it would be easier to include links and manually edit that way.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# To-Do List

This section is just for me to keep track of items I want to finish.

- [x] add section titles for each section only for mobile or not "large" monitors
- [x] for large monitors, have the menu items highlighted when scrolling to that section
- [x] finalize color themes for dark
- [x] finalize color themes for light
- [x] experience description and skills (initial draft)
- [x] project description and skills
- [x] remove education section?
- [x] mouse spotlight effect
- [x] new readme
- [ ] putting sun or moon inside switch button?
- [ ] update contacts. possibly put them in the json as configurable? might be difficult with symbols.
- [x] ability to add extra links within experience or project cards
- [ ] be more consistent with margin/padding top and right or bottom and left to help with item spacing
- [x] have links change color in footer and in about sections
- [x] get a domain name for website
