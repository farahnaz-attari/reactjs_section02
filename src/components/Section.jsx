export default function Section({title,children, ...props}) {

    return (
        <section {...props}>
            <h2>
                {title}
                {children}
            </h2>
        </section>
    )

}