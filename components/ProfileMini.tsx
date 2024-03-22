import { Typography, Paper, Stack, Button, Divider } from "@mui/material";
import React from "react";

import { Profile } from "../types/gosti/Profile";
import { ProfilePFP } from "./ProfilePFP";
import { ProfileViewModal } from "./ProfileViewModal";

interface ProfileMiniProps {
    profile: Profile;
};

export const ProfileMini = (
    props: ProfileMiniProps,
) => {
    const { profile } = props;

    const [openProfileView, setOpenProfileView] = React.useState(false);
    const { did } = profile;

    return (
        <Paper elevation={2} sx={{ paddingLeft: 2, paddingRight: 2, width: "fit-content" }}>
            <Stack justifyContent={"center"} alignContent={"center"} direction="row">
                <Stack justifyContent={"center"} alignContent={"center"} direction="column">
                    {ProfilePFP({ imgSrc: profile.metadata.gostiAvatar, size: 32 })}
                </Stack>
                <Divider sx={{ height: 32, m: 2 }} orientation="vertical" />
                <Button size="small" sx={{ textTransform: "unset" }} onClick={() => {
                    setOpenProfileView(true);
                }}><Typography variant="h6">{(profile?.metadata.gostiDisplayName) ? profile?.metadata.gostiDisplayName : `${did.slice(0, 13)}...${did.slice(64, did.length)}`}</Typography></Button>
                <ProfileViewModal open={openProfileView} setOpen={setOpenProfileView} did={did} />

            </Stack>
        </Paper>
    );
};
