# Junior Frontend Developer Portfolio

A responsive portfolio website built for the junior frontend developer coding test, based on the provided Figma home page design.

## Submission

- Live Website URL: [coding-test-portfolio.vercel.app](https://coding-test-portfolio.vercel.app/)

## Pages

- `index.html` - main portfolio page with header, hero, projects, skills, events and activities, and footer.
- `about.html` - about page with personal profile and background content.
- `projects.html` - all projects listing page.
- `project-ecommerce.html` - e-commerce project detail page.
- `project-hotel.html` - hotel booking project detail page.
- `project-car.html` - car website project detail page.
- `project-wordpress.html` - WordPress projects detail page.
- `project-detail.html` - redirect page to the e-commerce project detail.
- `events.html` - events and activities page.

## How to Run

Open `index.html` directly in a browser, or serve the folder with any static server.

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/index.html
```

## Libraries Used

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap 5.3.3
- Bootstrap Icons 1.11.3
- Font Awesome 6.5.2
- Google Fonts - Poppins

## Assumptions and Additional Features

- The portfolio content uses placeholder personal details and sample projects, which can be replaced with the applicant's real information.
- The Figma design was not directly accessible in this workspace, so the implementation focuses on the required sections, responsiveness, clean structure, and consistent visual language.
- Visual assets are stored in `assets/images` and are based on the provided exported design images.
- The website is built as a static frontend project, so it does not require a backend server, database, or build step.
- Responsive navigation, dropdown project links, carousel-style controls, smooth scroll-to-top behavior, and dedicated project/event pages were added for a fuller portfolio experience.
