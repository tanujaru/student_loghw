const React = require('react');

const New = (props) => {
  return (
    <div style={{fontFamily: "Arial", margin: "1rem"}}>
      <h1 style={{ color: "#873e23", textAlign: "center"}}>New Log</h1>
      {
      /*  creating a new Log */
      <form action="/logs" method="POST">
        <label>Title:</label>
        <input type="text" name="title" /><br/>
        <label>Entry:</label>
        <input type="textarea" name="entry" /><br/>
        <label>Is Ship Broken Check:</label>
        <input type="checkbox" name="Is Ship Broken" /><br/>
        <input style={{marginTop: "20px"}} type="submit" name="" value="Create Log" />
      </form>
      }
      <p><a href="/logs">Return to Main Log</a></p>
    </div>
  )
}

module.exports = New;