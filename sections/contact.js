const html = (strings, ...values) => strings.raw[0];

export const Contacts = () => {
  return new Promise((resolve, reject) => {
    const contacts = document.getElementById("contacts");

    if (contacts) {
      contacts.innerHTML = html`
        <div class="flex-container">
          <div class="text-content">
            <h2>Contact Us</h2>
            <p>
              We'd love to hear from you! Please fill out the form on the right
              or reach out to us via email or phone.
            </p>
            <p>
              Our team is available to assist you with any inquiries or support
              you may need.
            </p>
          </div>
          <div class="form-container">
            <!-- Form will be injected here -->
          </div>
        </div>
        <style>
          /* General styles for the contact section */
          #contacts {
            padding: 30px;
            background-color: #ffff; /* Light background for contrast */
            border-radius: 8px; /* Rounded corners for the section */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
          }

          .flex-container {
            display: flex;
            justify-content: center; /* Center the content horizontally */
            align-items: center; /* Center items vertically */
            flex-wrap: wrap; /* Allow wrapping for smaller screens */
          }

          .text-content {
            flex: 1; /* Allow text content to take up available space */
            max-width: 50%; /* Limit the maximum width */
            margin-right: 20px; /* Add some margin to the right */
            min-width: 250px; /* Ensure it doesn't get too small */
            text-align: center; /* Center text */
            font-family: "Arial", sans-serif; /* Font family */
            color: #333; /* Dark text color */
          }

          .text-content h2 {
            font-size: 2.5rem; /* Larger font size for the heading */
            font-weight: bold; /* Bold font style for emphasis */
            margin-bottom: 15px; /* Space below heading */
          }

          .text-content p {
            font-size: 1.2rem; /* Medium font size for paragraphs */
            margin-bottom: 10px; /* Space below paragraphs */
          }

          .form-container {
            flex: 1;
            max-width: 50%;
            min-width: 250px;
          }

          .contact-button {
            background-color: transparent;
            color: #ed6a2a;
            border: 2px solid #ed6a2a;
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1.2rem;
            transition: background-color 0.3s, color 0.3s;
            margin-top: 15px;
            text-transform: uppercase;
          }

          .contact-button:hover {
            background-color: #ed6a2a;
            color: white;
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .flex-container {
              flex-direction: column;
            }
            .text-content,
            .form-container {
              max-width: 100%;
              margin-right: 0;
            }
          }
        </style>
      `;

      const script = document.createElement("script");
      script.setAttribute("data-b24-form", "inline/37/fui8yo");
      script.setAttribute("data-skip-moving", "true");
      script.async = true;
      script.src =
        "https://crm.multibank.uz/upload/crm/form/loader_37_fui8yo.js";

      contacts.querySelector(".form-container").appendChild(script);

      resolve("contacts loaded");
    } else {
      reject(new Error("contacts element not found!"));
    }
  });
};
