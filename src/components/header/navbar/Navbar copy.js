import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import * as React from 'react';
import logo from '../../../assets/images/logo.png';
const drawerWidth = 240;
const navItems = ['Marketplace', 'Collection', 'Community', "Create"];

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box
                component="img"
                src={logo}
                alt="logo"
            />
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{
                            textAlign: 'center',
                            fontSize: '20px',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            textTransform: 'none',
                        }}>
                            <ListItemText primary={item}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav"
                sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            width: '100%', my: 2,
                            mx: { xs: 0, sm: 0, md: 0, lg: 10 },
                        }}

                    >
                        <Box
                            sx={{
                                gap: '1rem',
                                alignItems: 'center',
                                display: { xs: 'none', sm: 'flex' },
                            }}
                        >
                            <Stack
                                component="img"
                                src={logo}
                                alt="logo"
                                sx={{ width: '3rem', height: '3rem' }}
                            />
                            <Typography
                                sx={{
                                    fontSize: '36px',
                                    fontWeight: 600,
                                    color: '#fff',
                                    fontFamily: 'Poppins',
                                }}
                            >
                                ENDFT
                            </Typography>
                        </Box>

                        <Box sx={{ display: { xs: 'none', sm: 'block' }, }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{
                                    color: '#fff',
                                    textAlign: 'center',
                                    fontSize: { sm: '14px', md: '16px', lg: '20px' },
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    textTransform: 'none',
                                    px: { sm: 2, lg: 3 },
                                }}>
                                    {item}
                                </Button>
                            ))}
                            <Box
                                component="button"
                                sx={{
                                    alignItems: 'center',
                                    color: '#fff',
                                    backgroundColor: '#2F80ED',
                                    padding: { sm: '10px 20px', lg: '15px 25px' },
                                    borderRadius: '60px',
                                    fontSize: { sm: '14px', md: '16px', lg: '20px' },
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                    "&:hover": {
                                        backgroundColor: '#2F80f1',
                                    },
                                }}
                            >
                                Connect Wallet
                            </Box>
                            {/* <Button
                                sx={{
                                    color: '#fff',
                                    backgroundColor: '#2F80ED',
                                    borderRadius: '15px',
                                    fontSize: '20px',
                                    fontFamily: 'Poppins',
                                    fontWeight: 400,
                                    textTransform: 'none',
                                }}
                            >
                                Connect Wallet
                            </Button> */}
                        </Box>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{
                px: { xs: 2, sm: 3, md: 12 },
                py: { xs: 0, sm: 0, md: 4 },
            }}>
                <Toolbar />
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
                    fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
                    aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
                    cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
                    at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
                    Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
                    numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
                    asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
                    assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
                    soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
                    ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
                    soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
                    Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
                    delectus quo eius exercitationem tempore. Delectus sapiente, provident
                    corporis dolorum quibusdam aut beatae repellendus est labore quisquam
                    praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
                    deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
                    fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
                    recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
                    debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
                    praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
                    voluptate iure labore, repellendus beatae quia unde est aliquid dolor
                    molestias libero. Reiciendis similique exercitationem consequatur, nobis
                    placeat illo laudantium! Enim perferendis nulla soluta magni error,
                    provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
                    iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
                    Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
                    reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
                    cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
                    consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
                    Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
                    dolores sunt inventore perferendis, aut sapiente modi nesciunt.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
                    fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
                    aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
                    cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
                    at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
                    Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
                    numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
                    asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
                    assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
                    soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
                    ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
                    soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
                    Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
                    delectus quo eius exercitationem tempore. Delectus sapiente, provident
                    corporis dolorum quibusdam aut beatae repellendus est labore quisquam
                    praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
                    deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
                    fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
                    recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
                    debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
                    praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
                    voluptate iure labore, repellendus beatae quia unde est aliquid dolor
                    molestias libero. Reiciendis similique exercitationem consequatur, nobis
                    placeat illo laudantium! Enim perferendis nulla soluta magni error,
                    provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
                    iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
                    Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
                    reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
                    cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
                    consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
                    Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
                    dolores sunt inventore perferendis, aut sapiente modi nesciunt.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
                    fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
                    aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
                    cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
                    at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
                    Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
                    numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
                    asperiores, exercitationem eius nostrum consequuntur iure aliquam itaque,
                    assumenda et! Quibusdam temporibus beatae doloremque voluptatum doloribus
                    soluta accusamus porro reprehenderit eos inventore facere, fugit, molestiae
                    ab officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
                    soluta, aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
                    Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
                    delectus quo eius exercitationem tempore. Delectus sapiente, provident
                    corporis dolorum quibusdam aut beatae repellendus est labore quisquam
                    praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
                    deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
                    fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
                    recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
                    debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
                    praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
                    voluptate iure labore, repellendus beatae quia unde est aliquid dolor
                    molestias libero. Reiciendis similique exercitationem consequatur, nobis
                    placeat illo laudantium! Enim perferendis nulla soluta magni error,
                    provident repellat similique cupiditate ipsam, et tempore cumque quod! Qui,
                    iure suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
                    Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore commodi
                    reprehenderit rerum reiciendis! Quidem alias repudiandae eaque eveniet
                    cumque nihil aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam
                    consequuntur dignissimos numquam at nisi porro a, quaerat rem repellendus.
                    Voluptates perspiciatis, in pariatur impedit, nam facilis libero dolorem
                    dolores sunt inventore perferendis, aut sapiente modi nesciunt.
                </Typography>

            </Box>
        </Box>
    );
}


export default Navbar;
