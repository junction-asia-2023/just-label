import { useAtom } from 'jotai';
import { FunctionComponent } from 'react';

import { userAtom } from '../../login/atom';

const Profile: FunctionComponent = () => {
  const [{ email, profileImage, department, name, position }] =
    useAtom(userAtom);

  return (
    <section className="profile-box">
      <div className="image-box">
        <img className="image" src={profileImage} alt="profile" />
      </div>
      <div className="list-box">
        <div className="list">
          <div className="name">Name</div>
          <div className="description">{name}</div>
        </div>
        <div className="list">
          <div className="name">Department</div>
          <div className="description">{department}</div>
        </div>
        <div className="list">
          <div className="name">Email</div>
          <div className="description">{email}</div>
        </div>
        <div className="list">
          <div className="name">Position</div>
          <div className="description">{position}</div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
