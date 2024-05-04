This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

create a .env file and this, please to make the project work: RAPPTR_HOST="http://dev.rapptrlabs.com/"

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Challenge Explanation
* project setup - 2h
	In the first phase of the challenge, I took time at the following points:
    * creation of folders and files structure: I Applied the modularity design patter to organize the different components. I used in the components and view a index.ts file as a proxy to have cleaner imports. I separated in different folders and file to follow de SOLID and DRY principals to have a cleaner code too and of the best quality. 
    * choosing a design system to base the project’s UI: I made some research to get some inspiration in a design system or UI kit that looks aesthetically pleasing
    * choosing color palette for tailwind configuration: after the research I choose and configured the color for my project base on the design system.
    * choosing libraries to use in the project: In this point I was thinking on the different libraries I could use for this project and installed them. At the end I decided to use:
        * react-icons
        * tailwind
        * sass
    * setting up the Github repo
    * setting the env variables and urls: I created some folders with a  env.ts to have a object that will make a lot easier and cleaner the use of .env variables. I did something similar in the urls.ts on the service folder to make the request to the API cleaner and scalable. 
    * making the configurations of next.config.mjs: I had to modify this file to integrate sass in the project and set the login as the home page.

* create button component - 0.5h
* create input component - 2h: I took some time thinking about and developing this component so that it could meet all the functionalities I needed for the challenge. I know that 2 hours may seem like a long time, but I wanted this component to be as robust and versatile as possible.
* create icon component - 0.25h: I applied the factory patter in this case and used the icons from react-icons to create this component.
* create login view and logic - 2.75h 
* create Todo view and logic - 2h
* create todoItem and logic - 1.5h

I handled user session verification mainly on the server-side. I converted the LoginView and TodoView to asynchronous components to use the ValidateToken function and, depending on the component and the returned value, then redirected or kept the user in the corresponding view. This ways I could use the benefits of working with server side rendering and client side rendering in my views.

### opportunities for improvement
* Add an error.tsx component to display an error component to the user in case something goes wrong and thus take advantage of one of the features that Next.js offers us for error handling.
* Similar to the previous point, I would have loved to add a not-found.tsx page. Next.js does something similar to the error.tsx component, but with routes that are not found within the project. This way, we could tell the user that has entered to a incorrect URL and redirect it to the appropriate page, such as the login page.
* I would have also loved to add a loading.tsx component to display a loader and thus improve the user experience while the request is completed and redirected to the view for everyone, since Next.js gives us this functionality natively.
* Implementing a global store would have been an excellent addition. In the end, I decided not to add it to the challenge, as having a good composition can lead to less reliance on a global state. However, for a project that may grow and need to scale, it would be necessary. I would even recommend the implementation and use of the Zustand library, as it has excellent integration with Next.js, follows the Flux pattern like Redux, but with a much more friendly syntax like Pinia from Vue.js.
* I would have also loved to go a little further and encrypt the session token for greater security. I know that handling the accessToken was not considered essential, but I did store it in a cookie and validated its existence, but it is not fully protected. That is why encrypting the token at some point when I execute the action server for the login would have been ideal and that I would have loved to implement for greater security and best practices. In addition, I would have loved to verify the token after its expiration date and that the new token is queried from the server side and saved.

I hope you enjoy the final result. I would have loved to have dockerized the app, deployed it to Vercel to see the project running online, and added unit testing to ensure the quality and robustness of the code. However, due to time constraints and a very busy week, I was unable to add these extras to make the challenge as close to a real project as possible.


