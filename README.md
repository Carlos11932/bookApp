Book App

Description

Book App is an application that allows users to manage their favorite books by organizing them into three categories: Currently Reading, Want to Read, and Read. Users can search for new books, move books between different shelves, and see their saved selections even after refreshing the page.

Features

	•	View three categories for books: Currently Reading, Want to Read, and Read.
	•	Move books between categories.
	•	Search for books and categorize them.
	•	Persist data between page refreshes.
	•	Navigate between the main page and the search page using React Router.

Installation

	1.	Clone the repository:
        git clone https://github.com/Carlos11932/bookApp.git
        cd bookApp

    2.	Install dependencies:
        npm install

    3.	Run the application:
        npm start

Main Page

	•	The main page displays three bookshelves: Currently Reading, Want to Read, and Read.
	•	Each book is displayed on the correct shelf along with its title and authors.
	•	Books can be moved between shelves using a select control.

Search Page

	•	The search page has a search input field that allows users to search for books.
	•	Search results are displayed as the user types into the search field.
	•	Search results allow users to categorize books as “Currently Reading”, “Want to Read”, or “Read”.
	•	Selections made on the search page are reflected on the main page.

Routing

	•	The main page contains a link to the search page. When the link is clicked, the search page is displayed, and the URL in the browser’s address bar is /search.
	•	The search page contains a link to the main page. When the link is clicked, the main page is displayed, and the URL in the browser’s address bar is /.

Code Functionality

	•	Component state is managed appropriately, passing state from parent components to child components using hooks like useState.
	•	Books have the same state on both the search page and the main page.
	•	Components in the application are built as functional components.
	•	The code runs without errors and is free of warnings that result from not following best practices. All code is functional and properly formatted.

Suggestions to Make Your Project Stand Out

	•	Consider adding a book “detail” page to display more information about any particular book.
	•	Consider adding drag-and-drop functionality to move books between shelves.

If you have any questions or need further assistance, feel free to reach out. Enjoy using Book App!