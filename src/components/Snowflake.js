import React, { Component } from 'react';
import { withWeb3 } from 'web3-webpacked-react';
import Typography from '@material-ui/core/Typography';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SnowflakeAddresses from './SnowflakeAddresses'
import SnowflakeResolvers from './SnowflakeResolvers'

class Snowflake extends Component {
  render() {
    const { hydroId, snowflakeDetails, getAccountDetails } = this.props

    return (
      <div>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="headline">Resolver Management</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{overflowX: 'auto'}}>
            <SnowflakeResolvers
              resolvers={snowflakeDetails.resolvers}
              resolverDetails={snowflakeDetails.resolverDetails}
              hydroId={hydroId}
              getAccountDetails={getAccountDetails}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="headline">Address Management</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{overflowX: 'auto'}}>
            <SnowflakeAddresses
              getAccountDetails={getAccountDetails}
              owner={snowflakeDetails.owner}
              ownedAddresses={snowflakeDetails.ownedAddresses}
              hydroId={hydroId}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

export default withWeb3(Snowflake)
