import React from 'react';

export default function MemberTag({name, id}) {
    return <a
        href={getProfileLink(id, name)}
        content-editable="false"
        data-ipshover=""
        data-ipshover-target={getProfileLink(id, name) + '/?do=hovercard'}
        data-mentionid={id}
    >@{name}&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&nbsp;</a>
}

const getProfileLink = (id, name) => {
    return "https://forum.dmginc.gg/profile/" + id + '-' + name + "/";
};
