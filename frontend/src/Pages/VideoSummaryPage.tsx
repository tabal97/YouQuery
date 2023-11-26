import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios'

interface ISummaryDataProp  {
    youtubeUrl: string
    context?: string
}

export function VideoSummaryPage(){

    const [videoLink, setVideoLink] = useState('')
    const [context, setContext] = useState('')
    const [summaryExpanded, setSummaryExpanded] = useState(true)
    const [videoSummaryText, setVideoSummaryText] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const postSummary = async (summaryData: ISummaryDataProp) =>{
        try {
            const response = await axios.post(`http://localhost:3000/summarize`, summaryData)

            setVideoSummaryText(response.data.summary);
        } catch(error){
            console.error(`Error posting data: ${Error}`)
        }
    }

    const handleSummarize = async () => {
      setIsLoading(true);

      await postSummary({
        youtubeUrl: videoLink,
        context: context
      });

      setIsLoading(false);
    }

    const handleAccordionChange = () => {
      setSummaryExpanded(!summaryExpanded)
    }

    return (
        <Container  sx={{backgroundColor: 'primary.dark', width: "100%", height: "100%" }} >
            <Typography textAlign="center" sx={{color: 'text.primary', fontWeight: '700'}} variant="h1">YouQuery</Typography>
            <Typography textAlign="center" sx={{color: 'text.primary', fontWeight: '700'}} variant="h4">Video Summarizer</Typography>
            <Box marginY={4}>
              <Typography sx={{color: 'text.primary'}} variant="caption"><b>Please Note:</b> This app is used for demo purposes only and as such, runs on Google Speech Recognition's free tier.<br/>We suggest using videos up to 5 minutes for the best experience</Typography>
            </Box>
            <Box marginY={2}>
              <TextField
                error={false}
                onChange={(e)=>{
                  setVideoLink(e.target.value)
                }}
                fullWidth
                id="outlined-error-helper-text"
                label="Insert your video link here"
              />
            </Box>
            <Box marginTop={2} marginBottom={5} textAlign="center">
              <TextField
                id="outlined-multiline-static"
                label="Add additional context"
                multiline
                rows={2}
                fullWidth
                onChange={(e) => {
                  setContext(e.target.value)
                }}
              />
              <Button
                disabled={isLoading}
                onClick={handleSummarize}
                color="success"
                variant="contained"
                sx={{ marginTop: 2 }}>
                  Summarize
              </Button>
            </Box>

            {
              isLoading ?
                <Grid justifyContent="center" container marginY={2}>
                  <CircularProgress sx={{color: 'text.primary'}}/>
                  <Typography variant="h5" sx={{color: 'text.primary', marginLeft: 2}}>This make take several minutes, thank you for your patience</Typography>
                </Grid> :
                videoSummaryText && <Accordion expanded={summaryExpanded} onChange={handleAccordionChange}>
                <AccordionSummary
                  expandIcon={<ExpandMore style={{color: '#FFFFFF'}} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <Typography variant="h5">Here is your video summary:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {videoSummaryText}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            }
        </Container>
    )
}