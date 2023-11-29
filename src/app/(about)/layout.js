const AboutLayout = ({children}) => {
  return (
    <main className="w-full flex flex-col items-center justify-between">
        <div>Insights</div>
        {children}
    </main>
  )
}

export default AboutLayout