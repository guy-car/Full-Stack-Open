```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Types a note & clicks "Save"
    
    Browser->>Server: POST /new_note (sends new note)
    activate Server
    Server-->>Browser: Redirect to /notes (302 response)
    deactivate Server

    Note right of Browser: Browser reloads the Notes page

    Browser->>Server: GET /notes (requests updated page)
    activate Server
    Server-->>Browser: Sends updated HTML
    deactivate Server

    Browser->>Server: GET /main.css (requests styles)
    activate Server
    Server-->>Browser: Sends CSS file
    deactivate Server

    Browser->>Server: GET /main.js (requests JavaScript)
    activate Server
    Server-->>Browser: Sends JS file
    deactivate Server

    Browser->>Server: GET /data.json (requests updated notes)
    activate Server
    Server-->>Browser: Sends updated list of notes (JSON)
    deactivate Server

    Note right of Browser: The new note appears on the page
```

---

### 
- The user interacts with the **browser** (typing a note & clicking save).  
- The **browser sends the note** to the **server** via a `POST` request.  
- The **server processes the note**, adds it to the list, and tells the **browser to reload the page**.  
- The **browser reloads** and makes several **GET requests** to rebuild the page with updated notes.  
- Finally, the **new note appears** on the page.  
