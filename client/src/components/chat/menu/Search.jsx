import { Box, styled } from "@mui/material"
import { InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';


const Component=styled(Box)`
    background:#fff;
    height:45px;
    border-bottom:1px solid rgba(0,0,0,0.14);
    display:flex;
    align-items:center;
`



const Wrapper=styled(Box)`
    background-color:#abb2b9;
    position:relative;
    margin:0 13px;
    width:100%;
    border-radius:10px
`

const Icon=styled(Box)`
    position:absolute;
    height:100%;
    padding:6px 10px;
`


const InputField=styled(InputBase)`
    width:100%;
    padding:16px;
    padding-left:65px;
    font-size:14px;
    font-weight:500;
    height:15px;
`

const Search= ({setText}) =>{
    return(
        <Component>
            
                <Wrapper>
                    <Icon>
                        <SearchIcon 
                            fontSize="small"
                            />
                    </Icon>
                        <InputField
                        placeholder="Search"
                        onChange={(e)=> setText(e.target.value)}
                        />
                    
                </Wrapper>
            
        </Component>
    )
}
export default Search;