//import './App.css'

function App() {
  return<>
  <div className='container'>
    <h1>Form in React</h1>
    <form>
      First Name:
      <input type="text" placeholder="enter first name"></input>
      Last name:
      <input type="text" placeholder="enter last name"></input>
      Enter Email:
      <input type="text" placeholder="enter Email"></input>
      Contact:
      <input type="number" placeholder="enter mob. number"></input>
      Gender:
      <input type="radio" name="Gender" value="m"/>male
      <input type="radio" name="Gender" value="f"/>femal
      <input type="radio" name="Gender" value="o"/>other

      your best subject:
      <select>
        <option value="">math</option>
        <option value="">physics</option>
        <option value="">history</option>
        <option value="">wed dev</option>
      </select>

      Upload Resume:
      <input type="file" name="resume" placeholder="select resume"/>
      Enter Url:
      <input type="file" name="url" placeholder="enter url"/>
      About:
      <input type="textbox" placeholder="About your self" name="about"/>

      <button type="submit" name="submit">submit</button>
      <button type="reset" name="button">reset</button>

    </form>

  </div>
  </>
}

export default App
