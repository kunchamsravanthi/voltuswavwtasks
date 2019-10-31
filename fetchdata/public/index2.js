class App extends React.Component {
    constructor(){
      super() 
        this.state = {
          data: []
        }
      
    }
    componentDidMount() {
        var data = {};
        data.title = "title";
        data.message = "message";
        data.firstname = $('#fname').val()
        data.lastname = $('#lname').val()
        data.email = $('#emailid').val()
        data.password = $('#pass').val()

        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'http://localhost:4041/users',
            success: function (res) {
                console.log('success');
                console.log(JSON.stringify(res));
            }
        });
    };
    render() {
      
          
      return (
        <table>
        <tbody>{this.state.data.map(function(res, key) {
               
                 return (
                    <tr key = {key}>
                        <td>{res.firstname}</td>
                        <td>{res.lastname}</td>
                        <td>{res.emailid}</td>
                        <td>{res.password}</td>
                    </tr>
                  )
               
               })}</tbody>
         </table>
      )
    }
  }
  
  ReactDOM.render(<App/>, document.getElementById('app'))
  