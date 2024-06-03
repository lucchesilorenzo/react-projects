export default function User({ user }) {
  return (
    <div className="user-info">
      <img src={user.avatar_url} alt={user.login} width="60" />
      <a href={user.html_url}>{user.login}</a>
    </div>
  );
}
