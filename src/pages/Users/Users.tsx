import { FC, useEffect, useState } from "react";
import { IUser } from "../../types/user";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="pr-[40px] pl-[40px]">
      <List>
        <ListItem>
          <ListItemText primary="Image" sx={{ width: "10%" }} />
          <ListItemText primary="First name" sx={{ width: "25%" }} />
          <ListItemText primary="Last name" sx={{ width: "25%" }} />
          <ListItemText primary="Email" sx={{ width: "25%" }} />
          <ListItemText primary="City" sx={{ width: "25%" }} />
          <ListItemText primary="Street" sx={{ width: "25%" }} />
        </ListItem>
        {users.map((item) => (
          <ListItem key={item.id} className="hover:bg-red-300 cursor-pointer">
            <Box sx={{ width: "10%" }}>
              <PersonOutlineIcon />
            </Box>
            <ListItemText
              primary={`${item.name.firstname}`}
              sx={{ width: "25%" }}
            />
            <ListItemText
              primary={`${item.name.lastname}`}
              sx={{ width: "25%" }}
            />
            <ListItemText primary={`${item.email}`} sx={{ width: "25%" }} />
            <ListItemText
              primary={`${item.address.city}`}
              sx={{ width: "25%" }}
            />
            <ListItemText
              primary={`${item.address.street}`}
              sx={{ width: "25%" }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
