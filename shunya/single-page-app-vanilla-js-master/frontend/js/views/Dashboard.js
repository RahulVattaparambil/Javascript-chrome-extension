import AbstractView from "./AbstractView.js";
const url = "https://jsonplaceholder.typicode.com/posts";
export default class extends AbstractView 
{
    constructor(params)
    {
        super(params);
        this.setTitle("Dashboard");
    }
// api url 

    async getHtml()
    {

        async function getapi(url)
        { 
    
    // Storing response 
            const response = await fetch(url); 
    
    // Storing data in form of JSON 
            var data = await response.json(); 
            console.log(data); 
            if (response) { 
                hideloader(); 
            } 
            show(data); 
        }
        getapi(url);

        function hideloader() 
        { 
            document.getElementById('loading').style.display = 'none'; 
        } 
// Function to define innerHTML for HTML table 
        function show(data) { 
            let tab =  
                `<tr> 
                <th>Name</th> 
                <th>Office</th> 
                <th>Position</th> 
                <th>Salary</th> 
                </tr>`
             for (let r of data)
             { 
                    tab += `<tr>  
                <td>${r.userId} </td> 
                <td>${r.id}</td> 
                <td>${r.title}</td>  
                <td>${r.body}</td>           
                </tr>`;
            } 
                
               
    // Setting innerHTML as tab variable 
            document.getElementById("employees").innerHTML = tab; 
        }   
        return `
            <h1>Welcome back, Dom</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
            <div class="d-flex justify-content-center"> 
            <div class="spinner-border" 
                 role="status" id="loading"> 
                <span class="sr-only">Loading...</span> 
            </div> 
            </div> 
            <h1>Registered Employees</h1> 
            <!-- table for showing data -->
            <table id="employees"></table> 
        `;
    }
}