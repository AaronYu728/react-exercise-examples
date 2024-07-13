export default function Footer() {
  let tdate = new Date();
  let tyear = tdate.getFullYear();
  return (
    <footer>
      <p>Copyright@{tyear}</p>
    </footer>
  );
}
