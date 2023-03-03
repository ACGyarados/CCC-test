import axios from "axios"

var url = "https://canvas.instructure.com/api/v1/courses"
var token = "token"
var courseId = "5507188"
// var quizId = "12357084"
var assignmentId = "33186293"

axios.get(url + "/" + courseId + "/assignments/" + assignmentId + 
"/submissions?include[]=submission_history", {
    headers: "Authorization: Bearer " + token
}).then(function (response) {
    console.log(response.status)

    let data = response.data

    for (let i = 0; i < data.length; i++) {
        console.log("Submission " + data[i].id)
        path = data[i].submission_history[0]
        if (!path.hasOwnProperty('submission_data')) {
            console.log("Incomplete submission")
            continue
        }
        for (let j = 0; j < path.submission_data.length; j++) {
            console.log("Question " + (j+1).toString() + "\n" + path.submission_data[j].text)
        }
    }
}).catch(function (error) {
    console.log(error)
}).finally(function () {})