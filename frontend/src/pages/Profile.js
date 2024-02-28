export default function Profile(props) {
  const user = { name: "Példa Éva", email: "eva@pelda.hu" };

  return (
    <div className="profil">
      {user ? (
        <div>
          <h2>Üdv, {user.name}!</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Adatok betöltése folyamatban...</p>
      )}
    </div>
  );
}
