const regexExps={
    "PWD_REGEX":/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
"EMAIL_REGEX":/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
"USER_REGEX":/^[a-zA-Z](?=[a-zA-Z0-9._]{4,23}$)/
}
export default regexExps