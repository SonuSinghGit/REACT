function Hello(){

    let course = 'react';
    let courseId= '2673';
    let fullCourse = () => {
        return "react js and more"
    }

      return<h3>
        this is the future speaking. i am learning {course}{fullCourse()} {courseId}
      </h3>
}

export default Hello;