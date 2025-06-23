import React from 'react';

import { CardHeader } from '../ui/card';

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <CardHeader>
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Icon className="w-5 h-5" />
        {title}
      </h2>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </CardHeader>
  );
}

export default SectionTitle;
