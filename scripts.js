import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
        import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

        const firebaseConfig = {
            apiKey: "AIzaSyDMcax3DSMbwCdf6ilMStGr7-wL3GVf8-Q",
            authDomain: "codingkan.firebaseapp.com",
            databaseURL: "https://codingkan-default-rtdb.firebaseio.com",
            projectId: "codingkan",
            storageBucket: "codingkan.firebasestorage.app",
            messagingSenderId: "753036437410",
            appId: "1:753036437410:android:babfafdcad76fd566234fb"
        };

        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);

        const userForm = document.getElementById('userForm');
        userForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const message = document.getElementById('message').value;

            const messagesRef = ref(db, 'messages');
            push(messagesRef, {
                
                message,
                timestamp: new Date().toISOString()
            });

            alert('Pesan berhasil dikirim!');
            userForm.reset();
        });
