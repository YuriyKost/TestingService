import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />

const ItemExampleDivided = () => (
    <Item.Group divided className='filmCards' >
        <Item>
            <Item.Image src='https://media.npr.org/assets/img/2013/10/24/original-5-_wide-5f6e2e52af7f8bd8a8d7f0fcfb158945465c19db.jpg?s=1400' />

            <Item.Content>
                <Item.Header as='a'>12 Years a Slave</Item.Header>
                <Item.Meta>
                    <span className='cinema'>Union Square 14</span>
                </Item.Meta>
                <Item.Description>{paragraph}</Item.Description>
                <Item.Extra>
                    <Label>IMAX</Label>
                    <Label icon='globe' content='Additional Languages' />
                </Item.Extra>
            </Item.Content>
        </Item>

        <Item>
            <Item.Image src='https://i.pinimg.com/originals/c4/29/be/c429befdfcff3892d560d51e254b29b9.jpg' />

            <Item.Content>
                <Item.Header as='a'>My Neighbor Totoro</Item.Header>
                <Item.Meta>
                    <span className='cinema'>IFC Cinema</span>
                </Item.Meta>
                <Item.Description>{paragraph}</Item.Description>
                <Item.Extra>
                    <Button primary floated='right'>
                        Buy tickets
                        <Icon name='right chevron' />
                    </Button>
                    <Label>Limited</Label>
                </Item.Extra>
            </Item.Content>
        </Item>

        <Item>
            <Item.Image src='https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/8ef070c9-2570-4540-9b83-d7ce759c0781/300x450' />

            <Item.Content>
                <Item.Header as='a'>Fight club</Item.Header>
                <Item.Meta>
                    <span className='cinema'>IFC</span>
                </Item.Meta>
                <Item.Description>{paragraph}</Item.Description>
                <Item.Extra>
                    <Button primary floated='right'>
                        Buy tickets
                        <Icon name='right chevron' />
                    </Button>
                </Item.Extra>
            </Item.Content>
        </Item>
    </Item.Group>
)

export default ItemExampleDivided
