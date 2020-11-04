import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const CardExampleGroups = () => (
    <Card.Group>
        <Card>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'
                />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                    Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Approve
                    </Button>
                    <Button basic color='red'>
                        Decline
                    </Button>
                </div>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzOVc3dPXiDlaxTTD1eHxtt44zfYB-ssBoqA&usqp=CAU'
                />
                <Card.Header>Molly Thomas</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>
                    Molly wants to add you to the group <strong>musicians</strong>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Approve
                    </Button>
                    <Button basic color='red'>
                        Decline
                    </Button>
                </div>
            </Card.Content>
        </Card>
        <Card>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='/images/avatar/large/jenny.jpg'
                />
                <Card.Header>Jenny Lawrence</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>
                    Jenny requested permission to view your contact details
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Approve
                    </Button>
                    <Button basic color='red'>
                        Decline
                    </Button>
                </div>
            </Card.Content>
        </Card>
    </Card.Group>
)

export default CardExampleGroups
