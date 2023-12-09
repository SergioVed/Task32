export const User = (props) => {
    return(
        <span>{props.name}{props.isloggedin}</span>
    )
    // Раніше тут було прізвище але я його видалив бо не дуже зручно, у першому прикладі де я робив воно є, у настуаних його немає
}