
import { Stack, Toolbar, Typography } from '@mui/material';
import { ReactNode } from 'react';

type FooterProps = {
    logo?: ReactNode
}
export const Footer = ({ logo }: FooterProps) => {
    return (
        <Stack
            data-testid="footer"
            textAlign={{ xs: 'center', sm: 'start' }}

            sx={{
                borderTop: '1px solid',
                borderColor: 'grey.200',
            }}
        >
            <Toolbar variant="dense" sx={{ height: '64px', paddingX: '10px', paddingY: '5px' }} >

                {logo && logo}
                <Typography variant='body2' color="text.secondary" marginLeft='15px'>

                    © 2024 VR Benefícios - Todos os direitos reservados
                </Typography>
            </Toolbar>

        </Stack>
    );
};
