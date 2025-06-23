import React from 'react';

import UserProfileMenu from '@/components/fragments/Profile/UserProfileMenu';

function ProfilePage() {
  return (
    <section className="max-w-[1400px] mx-auto p-4 pt-12 min-h-screen">
      <UserProfileMenu />
    </section>
  );
}

export default ProfilePage;
