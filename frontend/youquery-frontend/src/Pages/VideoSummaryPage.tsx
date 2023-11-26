import { ExpandMore, ExpandMoreOutlined } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";


export function VideoSummaryPage(){

    const [videoLink, setVideoLink] = useState('')
    const [summaryExpanded, setSummaryExpanded] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    // const validateForm
    
    const handleSummarize = () => {
        //validateForm
        setIsLoading(true)
        setTimeout(()=>{

            setIsLoading(false)
        }, 4000)
    }
    const handleAccordionChange=()=>{
        setSummaryExpanded(!summaryExpanded)
    }
    return(
        <Container maxWidth="md" sx={{backgroundColor: 'primary.dark'}} >
            <Typography textAlign="center" sx={{color: 'text.primary', fontWeight: '700'}} variant="h1">YouQuery Video Summarizer</Typography>
            <Box marginY={2}>
            <TextField
          error={false}
          onChange={(e)=>{
            setVideoLink(e.target.value)
          }}
          fullWidth
          id="outlined-error-helper-text"
          label="Insert your video link here"
          defaultValue="example.com/my-video"
          helperText="Some helper text"
        />
            </Box>
            <Box marginY={2} >
            <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={2}
          defaultValue="Further details on how you would like this summarised"
          fullWidth
        />
            </Box>
            
            <Container maxWidth="sm">
                <Box textAlign="center" >

                <Button disabled={isLoading} onClick={handleSummarize} color="success" variant="contained">Summarize</Button>
                </Box>
            </Container>

            {isLoading ? <Grid justifyContent="center" container marginY={2}><CircularProgress/></Grid> : <Box marginY={2}>
        
        <Accordion  expanded={summaryExpanded} onChange={handleAccordionChange}>
        <AccordionSummary
          expandIcon={<ExpandMore style={{color: '#FFFFFF'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"

        >
          <Typography variant="h5">Here is your video summary:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dignissimos quas quis similique perferendis obcaecati labore fuga delectus iure, sed quidem quia nesciunt, debitis ad consequuntur nihil reiciendis hic aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum sapiente iure, corporis suscipit fugiat qui molestias dicta laudantium harum, dolorem beatae autem blanditiis doloremque optio? Nulla eum qui expedita.
          </Typography>
        </AccordionDetails>
      </Accordion>
            </Box>}
        </Container>
    )
}