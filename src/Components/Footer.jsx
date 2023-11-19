function Footer() {
    const aYear = new Date().getFullYear();
    return (
      <footer>
        <div>
          <p>Personality Test Application &copy; {aYear}. All right Reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;