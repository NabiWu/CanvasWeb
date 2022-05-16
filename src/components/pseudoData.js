export const CoursesListData = [
    {
        name: "Web",
        path: "/Web"
    },
    {
        name: "HPC",
        path: "/HPC"
    },
    {
        name: "Distributed System",
        path: "/Distributed System"
    },
]
export const AnnouncementsData = [
    {
        id: 1,
        title: "no hw this week!",
        content: "that's true!",
        date: "5/11/2022"
    },
    {
        id: 2,
        title: "no hw next week!",
        content: "that's true!",
        date: "5/11/2022"
    },

]

export const AssignmentsData = [
    {
        id: 1,
        title: "hw1",
        description:"This is description",
        due_date: "6/11/2022",
        max_points: 100,
    },
    {
        id: 2,
        title: "hw2",
        description:"This is description",
        due_date: "6/12/2022",
        max_points: 100,
    },
]


// User
// uuid, username, email, user_id, password, type(admin/student/teacher), answers, status(inactive/active)

export const UsersData = [
    {
        uuid: 1,
        username: "chenyu",
        email:"chen@uchicago.edu",
        user_id: "111",
        password: 123,
        type: "student",
        answers: "[\"charles\",\"UC\",\"cs\"]",
        status: "inactive"
    },
    {
        uuid: 1,
        username: "yuerguo",
        email:"yuer@uchicago.edu",
        user_id: "112",
        password: 123,
        type: "student",
        answers: "[\"yu\",\"UC\",\"cs\"]",
        status: "inactive"
    },
    {
        uuid: 1,
        username: "bohanwu",
        email:"bohan@uchicago.edu",
        user_id: "113",
        password: 123,
        type: "student",
        answers: "[\"Navi\",\"UC\",\"cs\"]",
        status: "active"
    },
    {
        uuid: 1,
        username: "sb",
        email:"sb@uchicago.edu",
        user_id: "211",
        password: 123,
        type: "teacher",
        answers: "[\"sb\",\"UC\",\"cs\"]",
        status: "active"
    }
]