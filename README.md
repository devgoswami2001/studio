# ChartMind AI Showcase (Django Version)

This is a Django application showcasing ChartMind AI, providing insightful intraday market move predictions.

## Project Setup

### Prerequisites
- Python 3.8+
- Pip (Python package installer)
- Virtualenv (recommended)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd chartmind-django 
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3.  **Install Python dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Environment Variables:**
    Create a `.env` file in the project root (where `manage.py` is located) and add the following:
    ```env
    DJANGO_SECRET_KEY='your-very-secret-django-key-here'
    DJANGO_DEBUG=True 
    # For production, set DJANGO_DEBUG=False and configure ALLOWED_HOSTS
    # DJANGO_ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com 
    ```
    Generate a strong `DJANGO_SECRET_KEY`.

5.  **Apply database migrations:**
    ```bash
    python manage.py migrate
    ```

6.  **Create a superuser (optional, for admin panel access):**
    ```bash
    python manage.py createsuperuser
    ```

7.  **Set up Tailwind CSS (if not using pre-compiled CSS):**
    This project uses Tailwind CSS. You'll need Node.js and npm/yarn.
    - Install Tailwind CSS and its dependencies:
      ```bash
      npm install -D tailwindcss postcss autoprefixer tailwindcss-animate @tailwindcss/typography
      ```
    - Initialize Tailwind CSS (creates `tailwind.config.js` and `postcss.config.js`):
      ```bash
      npx tailwindcss init -p
      ```
    - Configure `tailwind.config.js` to scan your Django template files (see `tailwind.config.js` in this project for an example).
    - Create an input CSS file (e.g., `main/static/css/input.css` or use `main/static/css/globals.css` directly if it only contains Tailwind directives) with:
      ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```
    - Run the Tailwind CLI to build your CSS during development:
      ```bash
      npx tailwindcss -i ./main/static/css/globals.css -o ./main/static/css/tailwind_output.css --watch
      ```
      Ensure your `base.html` links to this output file (`tailwind_output.css`). For production, you'd run the build command without `--watch`.
      *Alternatively, use a Django package like `django-tailwind` to manage this.*

### Running the Development Server

Start the Django development server:
```bash
python manage.py runserver
```
The application will be accessible at `http://127.0.0.1:8000/`.

## Key Components

-   **`main` app:** Contains the core logic, views, templates, and static files for the showcase website.
    -   `views.py`: Handles requests and renders templates.
    -   `templates/main/`: HTML templates for different pages and sections.
    -   `static/`: CSS, JavaScript, and image files.
    -   `ai_flows.py`: Placeholder for AI logic integration.
-   **`chartmind_django` project directory:** Contains global project settings and URL configurations.

## Structure

The project follows the Django Model-View-Template (MVT) pattern.

-   **Models (`main/models.py`):** Data structure (currently minimal, can be expanded for features like a blog).
-   **Views (`main/views.py`):** Request handling logic.
-   **Templates (`main/templates/`):** Presentation layer (HTML).
-   **Static Files (`main/static/`):** CSS, JavaScript, images.
-   **URLs (`chartmind_django/urls.py`, `main/urls.py`):** URL routing.

## Future Enhancements
- Implement database models for blog posts and other dynamic content.
- Integrate a Python AI/ML library (e.g., Genkit Python SDK, Google AI Python SDK) for the `ai_flows.py`.
- Develop more complex UI components with JavaScript if needed (e.g., modals, interactive charts).
- Implement user authentication if required.
- Add comprehensive testing.
- Configure for production deployment (e.g., Gunicorn, Nginx, Whitenoise for static files).
